package org.ong.pet.pex.backendpetx.service.impl;

import lombok.AllArgsConstructor;
import org.ong.pet.pex.backendpetx.dto.request.InfoProdutoDTO;
import org.ong.pet.pex.backendpetx.dto.request.ProdutoDTO;
import org.ong.pet.pex.backendpetx.dto.response.ProdutoDTOResposta;
import org.ong.pet.pex.backendpetx.entities.Estoque;
import org.ong.pet.pex.backendpetx.entities.Ong;
import org.ong.pet.pex.backendpetx.entities.Produto;
import org.ong.pet.pex.backendpetx.enums.TipoProduto;
import org.ong.pet.pex.backendpetx.repositories.EstoqueRepository;
import org.ong.pet.pex.backendpetx.repositories.OngRepository;
import org.ong.pet.pex.backendpetx.repositories.ProdutoRepository;
import org.ong.pet.pex.backendpetx.service.ProdutoService;
import org.ong.pet.pex.backendpetx.service.exceptions.PetXException;
import org.ong.pet.pex.backendpetx.service.exceptions.ProdutoException;
import org.ong.pet.pex.backendpetx.service.mappers.ProdutoMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Arrays;
import java.util.List;

@Service
@AllArgsConstructor
public class ProdutoServiceImpl implements ProdutoService {

    private final ProdutoRepository produtoRepository;
    private final OngRepository ongRepository;
    private final EstoqueRepository estoqueRepository;
    private final ProdutoMapper produtoMapper;

    private final static Long ONG = 1L;

    @Transactional
    public Long cadastrarProduto(final ProdutoDTO dto) {

        var ong = ongRepository.findById(ONG).orElseThrow(PetXException::ongNaoEncontrada);

        if (ong.getEstoque() == null) {
            ong = criarEstoque(ong);
        }

        var produto = produtoMapper.mapearParaEntidade(dto, ong.getEstoque());
        ong.getEstoque().getProdutos().add(produto);
        produto = produtoRepository.save(produto);
        ongRepository.save(ong);
        return produto.getId();
    }


    @Override
    @Transactional(readOnly = true)
    public ProdutoDTOResposta buscarProdutoPorId(final Long id) {
        var produto = produtoRepository.findById(id)
                .orElseThrow(() -> ProdutoException.produtoNaoEncontrado(id.toString()));
        return produtoMapper.mapearParaDto(produto);
    }

    @Override
    @Transactional
    public ProdutoDTOResposta atualizarProduto(final Long id, final ProdutoDTO dto) {
        Produto produtoExistente = produtoRepository.findById(id)
                .orElseThrow(() -> ProdutoException.produtoNaoEncontrado(id.toString()));

        if (dto.nome() != null) produtoExistente.setNome(dto.nome());
        if (dto.descricao() != null) produtoExistente.setDescricao(dto.descricao());
        if (dto.quantidade() != null) produtoExistente.setQuantidade(dto.quantidade());
        if (dto.unidadeDeMedida() != null) produtoExistente.setUnidadeDeMedida(dto.unidadeDeMedida());
        if (dto.tipoProduto() != null) produtoExistente.setTipoProduto(dto.tipoProduto());
        if (dto.atributosEspecificos() != null) {
            dto.atributosEspecificos().forEach(produto -> {
                validarCamposDinamicos(dto.tipoProduto(), dto.atributosEspecificos());
                produtoExistente.adicionarAtributo(produto.chave(), produto.valor());

            });
        }
        Produto produtoAtualizado = produtoRepository.save(produtoExistente);
        return produtoMapper.mapearParaDto(produtoAtualizado);
    }

    @Override
    @Transactional
    public void deletarProduto(final Long id) {
        Produto produto = produtoRepository.findById(id)
                .orElseThrow(() -> ProdutoException.produtoNaoEncontrado(id.toString()));
        produtoRepository.delete(produto);
    }

    public void validarCamposDinamicos(TipoProduto tipoProduto, List<InfoProdutoDTO> atributosDinamicos) {

        List<InfoProdutoDTO> atributosNormalizadosList = atributosDinamicos.stream()
                .map(item -> new InfoProdutoDTO(item.chave().toUpperCase(), item.valor().toUpperCase())).toList();


        List<String> portesRacaoAceitos = List.of("pequeno", "medio", "grande");
        List<String> camposDeRacaoEMedicamentoAceitos = List.of("LOTE", "VALIDADE", "PORTE");

        if (tipoProduto == TipoProduto.MEDICAMENTO || tipoProduto == TipoProduto.RACAO) {
            atributosNormalizadosList.forEach(atributo -> {
                if (!camposDeRacaoEMedicamentoAceitos.contains(atributo.chave())) {
                    throw ProdutoException.campoNaoAceito(atributo.chave(), Arrays.toString(camposDeRacaoEMedicamentoAceitos.toArray()));
                }
            });
        }

    }

    private Ong criarEstoque(final Ong ong) {
        Estoque estoque = new Estoque();
        estoque.setOng(ong);
        Estoque savedEstoque = estoqueRepository.save(estoque);
        ong.setEstoque(savedEstoque);
        return ongRepository.save(ong);
    }
}
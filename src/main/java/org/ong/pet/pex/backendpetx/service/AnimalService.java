package org.ong.pet.pex.backendpetx.service;

import org.ong.pet.pex.backendpetx.dto.request.AnimalGenericoRequisicao;
import org.ong.pet.pex.backendpetx.dto.request.AnimalObituarioResquisicao;
import org.ong.pet.pex.backendpetx.dto.response.AnimalGenericoResposta;
import org.ong.pet.pex.backendpetx.dto.response.AnimalPaginadoResposta;
import org.ong.pet.pex.backendpetx.dto.response.RespostaAnimalSemConjunto;
import org.ong.pet.pex.backendpetx.enums.ComportamentoEnum;
import org.ong.pet.pex.backendpetx.enums.EspecieEnum;
import org.ong.pet.pex.backendpetx.enums.MaturidadeEnum;
import org.ong.pet.pex.backendpetx.enums.OrigemAnimalEnum;
import org.ong.pet.pex.backendpetx.enums.PorteEnum;
import org.ong.pet.pex.backendpetx.enums.SexoEnum;
import org.ong.pet.pex.backendpetx.enums.StatusEnum;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Map;

public interface AnimalService {


    List<RespostaAnimalSemConjunto> listaAnimaisCadastrados ();

    void adicionarAdocaoConjuntaEmAnimal (Map<String,String> chips);

    AnimalGenericoResposta atualizarAnimal (Long id, AnimalGenericoRequisicao animalSemConjuntoDTO);

    void deletarPorId (Long id);

    void declararObito (AnimalObituarioResquisicao obiturario);

    AnimalGenericoResposta cadastrarAnimalSolo (AnimalGenericoRequisicao animalGenericoRequisicao);

    AnimalGenericoResposta buscarAnimalPorId(Long id);

    AnimalGenericoResposta buscarAnimalPorChip(String chip);

    Page<AnimalPaginadoResposta> paginarAnimais(String nome, String raca, EspecieEnum especie, PorteEnum porte, StatusEnum status,
                                                String doenca, ComportamentoEnum comportamento, MaturidadeEnum maturidade,
                                                OrigemAnimalEnum origem, SexoEnum sexo, Pageable pageable);
}

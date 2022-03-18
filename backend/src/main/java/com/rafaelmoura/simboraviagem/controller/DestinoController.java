package com.rafaelmoura.simboraviagem.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rafaelmoura.simboraviagem.model.Destino;
import com.rafaelmoura.simboraviagem.repository.DestinoRepository;

@RestController
@RequestMapping(value = "/destino")
public class DestinoController {

	@Autowired
	private DestinoRepository destinoRepository;

	@GetMapping(value = "/")
	public ResponseEntity<List<Destino>> findAll() {
		List<Destino> destinos = (List<Destino>) destinoRepository.findAll();

		return new ResponseEntity<List<Destino>>(destinos, HttpStatus.OK);
	}

	@DeleteMapping(value = "/deletar/{id}")
	public String deletar(@PathVariable(value = "id") Long id) {

		destinoRepository.deleteById(id);
		return "Deletado com sucesso";
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<Destino> findById(@PathVariable(value = "id") Long id) {

		Optional<Destino> destino = destinoRepository.findById(id);

		return new ResponseEntity<Destino>(destino.get(), HttpStatus.OK);
	}

	@PostMapping(value = "/salvar")
	public ResponseEntity<Destino> salvar(@RequestBody Destino destino) {

		Destino destinoSalvar = destinoRepository.save(destino);

		return new ResponseEntity<Destino>(destinoSalvar, HttpStatus.OK);

	}

	@PutMapping(value = "/atualizar")
	public ResponseEntity<Destino> atualizar(@RequestBody Destino destino) {
		Destino destinoAtualizar = destinoRepository.save(destino);
		return new ResponseEntity<Destino>(destinoAtualizar, HttpStatus.OK);
	}

}

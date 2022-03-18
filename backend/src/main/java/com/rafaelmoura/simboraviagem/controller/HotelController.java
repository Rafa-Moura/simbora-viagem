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

import com.rafaelmoura.simboraviagem.model.Hotel;
import com.rafaelmoura.simboraviagem.repository.HotelRepository;

@RestController
@RequestMapping(value = "/hotel")
public class HotelController {

	@Autowired
	private HotelRepository hotelRepository;

	@GetMapping(value = "/")
	public ResponseEntity<List<Hotel>> findAll() {

		List<Hotel> hotel = (List<Hotel>) hotelRepository.findAll();

		return new ResponseEntity<List<Hotel>>(hotel, HttpStatus.OK);

	}

	@DeleteMapping(value = "/deletar/{id}")
	public String deletar(@PathVariable(value = "id") Long id) {

		hotelRepository.deleteById(id);

		return "Deletado com sucesso";
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<Hotel> findById(@PathVariable(value = "id") Long id) {

		Optional<Hotel> hotel = hotelRepository.findById(id);

		return new ResponseEntity<Hotel>(hotel.get(), HttpStatus.OK);
	}

	@PostMapping(value = "/salvar", produces = "application/json")
	public ResponseEntity<Hotel> salvar(@RequestBody Hotel hotel) {

		Hotel hotelSalvo = hotelRepository.save(hotel);

		return new ResponseEntity<Hotel>(hotelSalvo, HttpStatus.OK);

	}

	@PutMapping(value = "/atualizar", produces = "application/json")
	public ResponseEntity<Hotel> atualizar(@RequestBody Hotel hotel) {

		Hotel hotelAtualizar = hotelRepository.save(hotel);

		return new ResponseEntity<Hotel>(hotelAtualizar, HttpStatus.OK);

	}

}

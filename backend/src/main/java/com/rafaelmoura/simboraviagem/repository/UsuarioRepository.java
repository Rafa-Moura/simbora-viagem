package com.rafaelmoura.simboraviagem.repository;

import org.springframework.data.repository.CrudRepository;

import com.rafaelmoura.simboraviagem.model.Usuario;

public interface UsuarioRepository extends CrudRepository<Usuario, Long> {

}

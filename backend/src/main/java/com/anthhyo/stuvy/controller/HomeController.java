package com.anthhyo.stuvy.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

	@GetMapping("/")
	public String index() {
		return "Hello World";
	}

	@GetMapping("/d")
	public String index2() {
		return "Hello World";
	}

}

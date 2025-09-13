package com.anthhyo.stuvy.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

	@GetMapping("/")
	public ResponseEntity<String> index() {
		return ResponseEntity.ok("Stuvy API");
	}

	@GetMapping("/health")
	public ResponseEntity<Object> health() {
		return ResponseEntity.ok(new Object() {
			public final String status = "UP";

			public final String service = "stuvy-api";

			public final long timestamp = System.currentTimeMillis();
		});
	}

	@GetMapping("/api/public/hello")
	public ResponseEntity<String> publicHello() {
		return ResponseEntity.ok("Hello from Stuvy Public API!");
	}

	@GetMapping("/api/protected/test")
	public ResponseEntity<String> protectedTest() {
		return ResponseEntity.ok("This is a protected endpoint!");
	}

}

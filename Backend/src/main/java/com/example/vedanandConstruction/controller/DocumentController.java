package com.example.vedanandConstruction.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.vedanandConstruction.entity.Documents;
import com.example.vedanandConstruction.service.DocumentService;

@RestController
@CrossOrigin("*")
@RequestMapping("")
public class DocumentController {
	@Autowired
	private DocumentService documentService;
	
	@PostMapping("/uploadFile")
    public Documents uploadFile(@RequestParam("file") MultipartFile file) throws IOException {
        return documentService.saveDocument(file);
    }
	
	

}

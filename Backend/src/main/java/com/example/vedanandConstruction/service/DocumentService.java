package com.example.vedanandConstruction.service;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.vedanandConstruction.entity.Documents;
import com.example.vedanandConstruction.repository.DocumentRepository;

@Service
public class DocumentService {
	@Autowired
	private DocumentRepository documentRepository;
	
	public Documents saveDocument(MultipartFile file) {
        Documents document = new Documents();
		document.setName(file.getOriginalFilename());
		
		documentRepository.save(document);
		return saveDocument(file);
    }

}

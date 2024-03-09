package com.example.vedanandConstruction.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Documents {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer docId;
	@Column(name = "docName")
	private String Name;

	@ManyToOne
	@JoinColumn(name = "pId")
	private Project projectId;
	
	public Documents() {
		// TODO Auto-generated constructor stub
	}

	public Documents(Integer docId, String name, Project projectId) {
		super();
		this.docId = docId;
		Name = name;
		this.projectId = projectId;
	}

	public Integer getDocId() {
		return docId;
	}

	public void setDocId(Integer docId) {
		this.docId = docId;
	}

	public String getName() {
		return Name;
	}

	public void setName(String name) {
		Name = name;
	}

	public Project getProjectId() {
		return projectId;
	}

	public void setProjectId(Project projectId) {
		this.projectId = projectId;
	}

	@Override
	public String toString() {
		return "Documents [docId=" + docId + ", Name=" + Name + ", projectId=" + projectId + "]";
	}
	

	

}

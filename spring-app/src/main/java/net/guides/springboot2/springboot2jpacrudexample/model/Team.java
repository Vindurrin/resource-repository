package net.guides.springboot2.springboot2jpacrudexample.model;

import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "teams")
public class Team {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@NotNull
	private String name;
	
	@NotNull
	@OneToMany
	private List<Resource> resource;
	
	@NotNull
	private String status;
	
	@NotNull
	private Date start;
	
	@NotNull
	private Date end;
	
	@NotNull
	private String project;
	
	public Team() {
		
	}

	public Team(long id, String name, List<Resource> resource, String status, Date start, Date end, String project) {
		super();
		this.id = id;
		this.name = name;
		this.resource = resource;
		this.status = status;
		this.start = start;
		this.end = end;
		this.project = project;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<Resource> getResource() {
		return resource;
	}

	public void setResource(List<Resource> resource) {
		this.resource = resource;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Date getStart() {
		return start;
	}

	public void setStart(Date start) {
		this.start = start;
	}

	public Date getEnd() {
		return end;
	}

	public void setEnd(Date end) {
		this.end = end;
	}

	public String getProject() {
		return project;
	}

	public void setProject(String project) {
		this.project = project;
	}

	@Override
	public String toString() {
		return "Team [id=" + id + ", name=" + name + ", resource=" + resource + ", status=" + status + ", start="
				+ start + ", end=" + end + ", project=" + project + "]";
	}

}

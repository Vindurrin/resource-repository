package net.guides.springboot2.springboot2jpacrudexample.model;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "teams")
public class Team {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column
	private long id;
	
	@NotNull
	@Size(min=2, max=64, message="name should be between 2 and 64 characters")
	@Column
	private String name;
	
	@OneToMany(cascade = CascadeType.ALL)
	@NotNull
	private List<Resource> resources;
	
	@NotNull
	@Column
	@Size(min=2, max=64, message="status should be between 2 and 64 characters")
	private String status;
	
	@NotNull
	@Column
	private Date start;
	
	@NotNull
	@Column
	private Date end;
	
	@NotNull
	@ElementCollection
	// @Size(min=2, max=64, message="project should be between 2 and 64 characters")
	private List<String> projects;
	
	public Team() {
		
	}

	public Team(long id, String name, List<Resource> resources, String status, Date start, Date end, List<String> projects) {
		super();
		this.id = id;
		this.name = name;
		this.resources = resources;
		this.status = status;
		this.start = start;
		this.end = end;
		this.projects = projects;
	}
	
	public void fixDate() {
    	final long HOUR = 3600*1000;
    	start = new Date(start.getTime() + 6*HOUR);
    	end = new Date(end.getTime() + 6*HOUR);
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

	public @NotNull List<Resource> getResources() {
		return resources;
	}

	public void setResources(@NotNull List<Resource> resources) {
		this.resources = resources;
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

	public List<String> getProjects() {
		return projects;
	}

	public void setProjects(List<String> projects) {
		this.projects = projects;
	}

	@Override
	public String toString() {
		return "Team [id=" + id + ", name=" + name + ", resources=" + resources + ", status=" + status + ", start="
				+ start + ", end=" + end + ", project=" + projects + "]";
	}

}

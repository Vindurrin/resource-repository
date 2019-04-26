package net.guides.springboot2.springboot2jpacrudexample.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "resources")
public class Resource {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
	private String role;
	private Date start;
	private Date end;
	private String sudorole;
	private String project;
	private String status;
 
    public Resource() {
  
    }

	public Resource(long id, String role, Date start, Date end, String sudorole, String project, String status) {
		super();
		this.id = id;
		this.role = role;
		this.start = start;
		this.end = end;
		this.sudorole = sudorole;
		this.project = project;
		this.status = status;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
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

	public String getSudorole() {
		return sudorole;
	}

	public void setSudorole(String sudorole) {
		this.sudorole = sudorole;
	}

	public String getProject() {
		return project;
	}

	public void setProject(String project) {
		this.project = project;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "Resource [id=" + id + ", role=" + role + ", start=" + start + ", end=" + end + ", sudorole=" + sudorole
				+ ", project=" + project + ", status=" + status + "]";
	}

}

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
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Entity
@Table(name = "resources")
public class Resource {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column
    private long id;
	
	@NotNull(message="roles is the problem")
	// @Size(min=2, max=64, message="role should be between 2 and 64 characters")
	@ElementCollection
	private List<String> roles;
	
	@NotNull(message="start date is the problem")
	@Column
	private Date start;
	
	@NotNull(message="end date is the problem")
	@Column
	private Date end;
	
	@NotNull(message="sudoroles is the problem")
	@OneToMany(cascade = CascadeType.ALL)
	private List<SudoRole> sudoroles;
	
	@NotNull(message="projects is the problem")
	@ElementCollection
	private List<String> projects;
	
	@NotNull(message="status is the problem")
	@Column
	@Pattern(regexp = "active|Active|Inactive|inactive", flags = Pattern.Flag.CASE_INSENSITIVE)
	@Size(min=2, max=64, message="Status should be either Active or Inactive.")
	private String status;
 
    public Resource() {
  
    }
    
    public void fixDate() {
    	final long HOUR = 3600*1000;
    	start = new Date(start.getTime() + 6*HOUR);
    	end = new Date(end.getTime() + 6*HOUR);
	}

	public Resource(long id, List<String> roles, Date start, Date end, List<SudoRole> sudoroles, List<String> projects, String status) {
		super();
		this.id = id;
		this.roles = roles;
		this.start = start;
		this.end = end;
		this.sudoroles = sudoroles;
		this.projects = projects;
		this.status = status;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public List<String> getRoles() {
		return roles;
	}

	public void setRoles(List<String> roles) {
		this.roles = roles;
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

	public List<SudoRole> getSudoroles() {
		return sudoroles;
	}

	public void setSudoroles(List<SudoRole> sudoroles) {
		this.sudoroles = sudoroles;
	}

	public List<String> getProjects() {
		return projects;
	}

	public void setProjects(List<String> projects) {
		this.projects = projects;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "Resource [id=" + id + ", roles=" + roles + ", start=" + start + ", end=" + end + ", sudoroles=" + sudoroles
				+ ", projects=" + projects + ", status=" + status + "]";
	}

}

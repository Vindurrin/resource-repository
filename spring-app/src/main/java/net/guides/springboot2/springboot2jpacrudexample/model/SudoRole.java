package net.guides.springboot2.springboot2jpacrudexample.model;

import java.util.Date;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name="sudoroles")
public class SudoRole
{

    public SudoRole() {
    }

    public SudoRole(long id, String name, Date start, Date end) {
        this.id = id;
        this.name = name;
        this.start = start;
        this.end = end;
    }

    public long getId() {
        return this.id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getStart() {
        return this.start;
    }

    public void setStart(Date start) {
        this.start = start;
    }

    public Date getEnd() {
        return this.end;
    }

    public void setEnd(Date end) {
        this.end = end;
    }

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof SudoRole)) {
            return false;
        }
        SudoRole sudoRole = (SudoRole) o;
        return id == sudoRole.id && Objects.equals(name, sudoRole.name) && Objects.equals(start, sudoRole.start) && Objects.equals(end, sudoRole.end);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, start, end);
    }

    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", name='" + getName() + "'" +
            ", start='" + getStart() + "'" +
            ", end='" + getEnd() + "'" +
            "}";
    }


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private long id;

    @NotNull
    @Size(min=2, max=64, message="Name should not be null.")
    private String name;

    @NotNull
	@Column
	private Date start;
	
	@NotNull
	@Column
    private Date end;
    

}
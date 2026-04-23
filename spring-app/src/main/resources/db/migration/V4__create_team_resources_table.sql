CREATE TABLE IF NOT EXISTS team_resources (
    team_id BIGINT NOT NULL,
    resources VARCHAR(255) NOT NULL,
    CONSTRAINT fk_team_resources_team_id
        FOREIGN KEY (team_id)
        REFERENCES teams (id)
        ON DELETE CASCADE
);

CREATE INDEX idx_team_resources_team_id ON team_resources (team_id);

package com.burt.resourcemanagement;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.TimeZone;

import com.burt.resourcemanagement.model.Resource;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;

import org.junit.Test;

public class JavaTimeSerializationTest {

    @Test
    public void resourceDatesSerializeAsIsoDateStrings() throws Exception {
        ObjectMapper objectMapper = new ObjectMapper()
            .registerModule(new JavaTimeModule())
            .disable(DeserializationFeature.ADJUST_DATES_TO_CONTEXT_TIME_ZONE)
            .disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS);

        Resource resource = new Resource(
            10L,
            "Engineer",
            LocalDate.of(2026, 3, 31),
            LocalDate.of(2026, 4, 30),
            "Admin",
            "Apollo",
            "Active"
        );

        String json = objectMapper.writeValueAsString(resource);

        assertTrue(json.contains("\"start\":\"2026-03-31\""));
        assertTrue(json.contains("\"end\":\"2026-04-30\""));
    }

    @Test
    public void resourceDatesDeserializeWithoutTimezoneShiftAtBoundary() throws Exception {
        ObjectMapper objectMapper = new ObjectMapper()
            .registerModule(new JavaTimeModule())
            .disable(DeserializationFeature.ADJUST_DATES_TO_CONTEXT_TIME_ZONE)
            .disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS);

        TimeZone originalTz = TimeZone.getDefault();
        try {
            TimeZone.setDefault(TimeZone.getTimeZone(ZoneId.of("America/Los_Angeles")));

            String json = "{\"id\":10,\"role\":\"Engineer\",\"start\":\"2026-03-08\",\"end\":\"2026-03-09\",\"sudorole\":\"Admin\",\"project\":\"Apollo\",\"status\":\"Active\"}";
            Resource parsed = objectMapper.readValue(json, Resource.class);

            assertEquals(LocalDate.of(2026, 3, 8), parsed.getStart());
            assertEquals(LocalDate.of(2026, 3, 9), parsed.getEnd());
        } finally {
            TimeZone.setDefault(originalTz);
        }
    }
}

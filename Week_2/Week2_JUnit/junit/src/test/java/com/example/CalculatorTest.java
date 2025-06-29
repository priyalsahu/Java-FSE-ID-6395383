package com.example;

import org.junit.*;
import static org.junit.Assert.*;

public class CalculatorTest {

    private Calculator calculator;

    @Before
    public void setUp() {
        calculator = new Calculator(); // Arrange
        System.out.println("Setup complete");
    }

    @After
    public void tearDown() {
        calculator = null;
        System.out.println("Teardown complete");
    }

    @Test
    public void testMultiply() {
        int result = calculator.multiply(5, 5); // Act
        assertEquals(25, result);              // Assert
    }

    @Test
    public void testDivide() {
        int result = calculator.divide(14, 2);
        assertEquals(7, result);
    }
}

import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

    @Test
    public void testAdd() {
        Calculator calc = new Calculator();
        assertEquals(9, calc.add(4, 5));
    }

    @Test
    public void testSubtract() {
        Calculator calc = new Calculator();
        assertEquals(6, calc.subtract(8, 2));
    }
}

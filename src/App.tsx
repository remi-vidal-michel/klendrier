import "@mantine/core/styles.css";
import { MonthView } from "./components/MonthView";
import { Container } from "@mantine/core";

export function App() {
    return (
        <Container py="md">
            <MonthView />
        </Container>
    );
}

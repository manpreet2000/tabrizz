import AnimatedTab from "../components/AnimatedTab";
import Container from "../components/Container";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import Script from "../components/Script";

export default function Landing() {
    return (
        <Container>
            <Intro />
            <Script />
            <AnimatedTab />
            <Features />
            <Footer />
        </Container>
    );
}
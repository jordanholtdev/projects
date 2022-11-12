import Container from './Container';
import Header from './Header';
import Footer from './Footer';
import Counter from '../features/counter/Counter';

function App() {
    return (
        <Container>
            <Header />
            <Counter />
            <Footer />
        </Container>
    );
}

export default App;

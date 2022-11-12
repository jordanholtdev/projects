import Container from './Container';
import Header from './Header';
import Footer from './Footer';
import ProjectsList from '../features/projects/ProjectsList';
import Counter from '../features/counter/Counter';

function App() {
    return (
        <Container>
            <Header />
            <ProjectsList />
            <Counter />
            <Footer />
        </Container>
    );
}

export default App;

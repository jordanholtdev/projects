import Container from './Container';
import Header from './Header';
import Footer from './Footer';
import ProjectsList from '../features/projects/ProjectsList';

function App() {
    return (
        <Container>
            <Header />
            <ProjectsList />
            <Footer />
        </Container>
    );
}

export default App;

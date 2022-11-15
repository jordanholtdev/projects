import Container from '../../components/Container';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useLocation } from 'react-router-dom';

function ProjectDetail() {
    let project = useLocation();
    return (
        <Container>
            <Header />
            <h2>{project.state.fields.projectTitle}</h2>
            <a href={project.state.fields.projectUrl}>
                {project.state.fields.projectUrl}
            </a>
            <Footer />
        </Container>
    );
}

export default ProjectDetail;

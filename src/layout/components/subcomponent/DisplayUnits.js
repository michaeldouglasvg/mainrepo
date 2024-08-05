import { useLocation } from 'react-router-dom';
import MainHome from '../../../pages/home/MainHome';
import MainProjects from '../../../pages/projects/MainProjects';
import MainServices from '../../../pages/service/MainServices';
import ProfileInformation from '../../../pages/profile/ProfileInformation';
import MainContact from '../../../pages/contact/MainContact';
import MainBlog from '../../../pages/blogs/MainBlog';

const DisplayUnits = () => {
  const location = useLocation();

  const renderComponent = () => {
    switch (location.pathname) {
      case '/':
        return <MainHome />;
      case '/projects':
        return <MainProjects />;
      case '/services':
        return <MainServices />;
      case '/about':
        return <ProfileInformation />;
      case '/contacts':
        return <MainContact />;
      case '/blogs':
        return <MainBlog />
      default:
        return null;
    }
  };

  return (
    <div className='ContentDisplayUnit'>
      {renderComponent()}
    </div>
  );
}

export default DisplayUnits;

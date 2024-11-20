import { ArrowRightOutlined } from '@ant-design/icons';
import Button from '../../components/ui/Button';

const HomePage = () => {
  return (
    <div className='home'>
      <div className='home__content'>
        <h1 className='home__title'>Welcome ReactJs boilerplate</h1>
        <p className='home__description'>
          Visit README.md to see more information
        </p>
        <Button type='primary'>
          Let's go
          <ArrowRightOutlined />
        </Button>
      </div>
    </div>
  );
};

export default HomePage;

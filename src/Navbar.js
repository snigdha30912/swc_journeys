import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { BrowserRouter as Router, useHistory} from 'react-router-dom';

const NavigationBar = () => {
    const history = useHistory();
    return ( 
        <>
        <Navigation
            // you can use your own router's api to get pathname
            activeItemId="/management/members"
            onSelect={({itemId}) => {
              // maybe push to the route
              
              history.push(itemId);
              console.log(itemId);
            }}
            items={[
                
              {
                title: 'Communities',
                itemId: '/communities',
                // you can use your own custom Icon component as well
                // icon is optional
                // elemBefore: () => <Icon name="inbox" />,
              },
              {
                title: 'Home',
                itemId: '/',
                // elemBefore: () => <Icon name="users" />,
                
              },
              {
                title: 'Explore',
                itemId: '/explore',
                
              },
              {
                title: 'Channels',
                itemId: '/channels',
                
              },
              {
                title: 'Timelines',
                itemId: '/timelines',
                
              },
              {
                title: 'Bookmarks',
                itemId: '/bookmarks',
                
              },
            ]}
          />
      </>
     );
}
 
export default NavigationBar;
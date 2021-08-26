import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { BrowserRouter as Router, useHistory} from 'react-router-dom';

const SideNavBar = () => {
    const history = useHistory();
    return ( 
        <>
        <Navigation
            activeItemId="/management/members"
            onSelect={({itemId}) => {
              history.push(itemId);
              console.log(itemId);
            }}
            items={[
                
              {
                title: 'Communities',
                itemId: '/communities',
              },
              {
                title: 'Home',
                itemId: '/',
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
 
export default SideNavBar;
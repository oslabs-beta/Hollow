// @deno-types="https://raw.githubusercontent.com/Soremwar/deno_types/master/react/v16.13.1/react.d.ts"
import React from 'https://dev.jspm.io/react@16.13.1';
import { ItemType, SidebarProps, HeaderType } from './interface.ts';

/**
 * @description Renders each individual list item for sidebar
 * @param type: item name
 * @param handleClick: sets active state to clicked item
 * @param active: boolean - sets className to 'active' or 'inactive 
 */
const ListItem: React.FC<ItemType> = ({ type, handleClick, active }) => {
  return (
    <div onClick={(e) => handleClick(e)} className='sidebarItem'>
      <p className={active ? 'active' : 'inactive'}>{type}</p>
    </div>
  );
};

/**
 * @description Renders each individual list header for sidebar
 * @param type: header name
 */
const ListHeader: React.FC<HeaderType> = ({ type }) => {
  return (
    <div>
      <p className='sidebarListHeader'>{type}</p>
    </div>
  );
}

/**
 * @description Renders sidebar component
 * @param SidebarProps:
 * activeItem - currently selected sidebar item
 * handleClick - handles change of selected sidebar item
 * currentCollections - array of all current collections
 * currentTools - array of all current tools
 */
const Sidebar: React.FC<SidebarProps> = ({ currentCollections, currentTools, handleClick, activeItem }) => {
  // TODO:
  // build settings component
  // build content-builder component
  // fix up styling

  // maps each collection to List item and renders below - currently uses dummy data
    const collections = currentCollections.map((collection, i) => {
      let active = false;
      if (collection === activeItem) active = true;
      return (<ListItem key={collection} type={collection} handleClick={handleClick} active={active} />);
    });

    // maps each tool to List item and renders below - plugins is filler for now
    const tools = currentTools.map((tool, i) => {
      let active = false;
      if (tool === activeItem) active = true;
      return (<ListItem key={tool} type={tool} handleClick={handleClick} active={active} />);
    });

    return(
      <div className='sidebarContainer'>
      <div className='sidebarLogo'>
        hollow
      </div>
      <ListHeader type='Collections'/>
        {collections}
      <ListHeader type='Tools' />
        {tools}
      <div className='sidebarSettings' onClick={(e) => handleClick(e)}>
        <h3>Settings</h3>
      </div>
    </div>
    );
}

export default Sidebar;
import { BsFillHouseAddFill } from 'react-icons/bs'
import { MdHomeWork, MdOutlineManageHistory } from 'react-icons/md'
import MenuItem from './MenuItem'
import { FaRegIdBadge } from 'react-icons/fa';
const SellerMenu = () => {
  
  return (
    <>
      <MenuItem
        icon={BsFillHouseAddFill}
        label="Add Plant"
        address="add-plant"
      />
      <MenuItem icon={BsFillHouseAddFill} label="Emolyees" address="Emolyees" />
      <MenuItem
        icon={BsFillHouseAddFill}
        label="Add-Emplyee"
        address="AddEmplyee"
      />
      <MenuItem
        icon={BsFillHouseAddFill}
        label="Add-EmplyeeID"
        address="AddEmployeFormId"
      />
      <MenuItem icon={MdHomeWork} label="My Inventory" address="my-inventory" />
      <MenuItem
        icon={MdOutlineManageHistory}
        label="Manage Orders"
        address="manage-orders"
      />
      <MenuItem
        icon={FaRegIdBadge}
        label="IdValedation"
        address="IdValedation"
      />
     
    </>
  );
}

export default SellerMenu

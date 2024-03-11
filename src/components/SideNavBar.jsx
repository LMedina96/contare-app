import { Icon } from '@iconify/react';

const SideNavBar = ({ handleView, viewToShow }) => {

    const listItem = [
        'carbon:dashboard',
        'material-symbols:payments-outline',
        'mdi:finance',
    ]

    return (

        <ul id='navbar' className="flex border border-slate-600 rounded-full shadow-xl">
            {
                listItem.map((item, index) => (
                    <li key={index}>
                        <button
                            className={
                                `p-4 hover:bg-gray-200 active:bg-gray-300 
                                    ${viewToShow === index ? 'bg-gray-300' : ''} 
                                    ${index === 0 ? 'rounded-s-full' : index === 2 ? 'rounded-e-full' : ''}`
                            }
                            onClick={() => handleView(index)}
                        >
                            <Icon icon={item} width="24" height="24" />
                        </button>
                    </li>
                ))
            }
        </ul>
    );
}

export default SideNavBar;
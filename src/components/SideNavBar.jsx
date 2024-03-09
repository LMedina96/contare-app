import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const SideNavBar = () => {

    const [itemSelected, setItemSelected] = useState(0)

    const handleItemSelected = (index) => {
        setItemSelected(index)
    }

    const listItem = [
        'carbon:dashboard',
        'material-symbols:payments-outline',
        'mdi:finance',
    ]

    return (
        <div className="fixed left-4 top-1/2 transform -translate-y-1/2 border border-slate-600 rounded-full shadow-xl">
            <ul>
                {
                    listItem.map((item, index) => (
                        <li key={index}>
                            <button
                                className={
                                    `p-4 hover:bg-gray-200 active:bg-gray-300 
                                    ${itemSelected === index ? 'bg-gray-300' : ''} 
                                    ${index === 0 ? 'rounded-t-full' : index === 2 ? 'rounded-b-full' : ''}`
                                }
                                onClick={() => handleItemSelected(index)}
                            >
                                <Icon icon={item} width="24" height="24" />
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default SideNavBar;
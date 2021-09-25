import React from 'react';
import { Link } from 'react-router-dom';

const NoticeItem = ({NoticeItem}) => {
    const {title, date, link} = NoticeItem
    
    return (
        <tr>
           <td></td>
           <td><Link className="link" to={`${link}`}>{title}</Link></td>
           <td>{date}</td>
           <td className="NoticeView" >
               <Link className="link" to={`${link}`}> View</Link>
           </td>
           <td className="NoticeDownload" >
                <Link className="link" to={`${link}`}> Download</Link>
           </td>
        </tr>
    );
};

export default NoticeItem;
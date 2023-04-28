import Link from "next/link";
import React from "react";
import { Nav, Stack } from "react-bootstrap";

function Navbar() {
    const navItems =[{title:"home",link:'/'},{title:"add book",link:'/add-book'},{title:"my books",link:'/'}]
  return (
    <div>
       <Stack direction="horizontal" gap={4}>
        {navItems.map((item,index)=>(
          <div key={index}>
            <Link href={item.link}>
              <div><p>{item.title}</p></div>
            </Link>
          </div>
        ))}
       </Stack>
    </div>
  );
}

export default Navbar;

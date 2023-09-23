"use client";
import dynamic from "next/dynamic";

import { useState } from "react";

export default function HomePageComponent() {
    const [show, setShow] = useState(false);

    const ComponentA = dynamic(()=>import('@components/a'))
    const ComponentB = dynamic(()=>import('@components/b'))
    const ComponentC = dynamic(()=>import('@components/c'))
    return (
        <div className="p-20">
            {/* client bundle seperately load */}
            <ComponentA />

            <button onClick={() => setShow(!show)} className="bg-green-700 text-white px-10 py-2 rounded-md">Toggle</button>

            {show && <ComponentB />}

            <ComponentC />


        </div>
    )
}

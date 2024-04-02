import React, {useState,useEffect,useRef} from 'react'

export default function useIntersection(options = {}) {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const refElement = useRef();

    useEffect(()=>{
        const element = refElement.current;
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                setIsIntersecting(entry.isIntersecting);
            })
        },options)
        
        if(element){
            observer.observe(element);
        }
        return () => {
            if(element) {
                observer.unobserve(element);
            }
        }
    },[options]);
    return[refElement, isIntersecting];
}

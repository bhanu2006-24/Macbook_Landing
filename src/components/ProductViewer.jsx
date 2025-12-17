import clsx from "clsx";
import { useMacbookStore } from "../store";

const ProductViewer = () => {
    const {color , scale ,setColor ,setScale , reset} = useMacbookStore();
  return (
    <section id="product-viewer">
        <h2>Take a Closer Look</h2>

        <div className="controls">
            <p className="info"> Macbook Pro 16" in  Space Black</p>

            <div className="flex-center gap-5 mt-5">
                <div className="color-control">
                    <div onClick={() => setColor('#adb5bd')} className={clsx('bg-neutral-300', color === '#adb5bd' && 'border-2 border-white')}/>
                    <div onClick={() => setColor('#1e1e1e')} className={clsx('bg-neutral-900', color === '#1e1e1e' && 'border-2 border-white')}/>
                </div>
            
                <div className="size-control">
                    <div onClick={() => setScale(0.06)} className={clsx(scale === 0.06 ? 'bg-white text-black' : 'bg-transparent text-white')}><p>14"</p></div>
                    <div onClick={() => setScale(1.5)} className={clsx(scale === 1.5 ? 'bg-white text-black' : 'bg-transparent text-white')}><p>16"</p></div>
                </div>  
            </div>
        </div>

        <p className="text-white text-4xl"> Render Canvas</p>
    </section>
  )
}

export default ProductViewer

export function WelcomeScreen({ onStart }) {
  return (
    <div className="text-center h-screen flex flex-col justify-between items-center bg-no-repeat bg-[url('/img/bg1.png')]">
      <img className="w-72 mt-4" style={{ marginTop: '-40px' }} src="img/topsecretsanta.png" alt="" />
      <button
        onClick={onStart}
        className="button text-white text-5xl font-bold w-fit pt-0 pr-12 pl-12 pb-6 mb-16"
        style={{ 
          backgroundImage: 'url(img/bgbtnr.svg)', 
          backgroundSize: 'contain', 
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat',

          
        }}
      >
        Commencer
      </button>
    </div>
  );
}
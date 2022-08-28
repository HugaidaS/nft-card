export default function App() {
  return (
    <main className="bg-main-bg h-screen">
      <div className="flex flex-col justify-center items-center h-4/5">
        <div className="bg-card-bg drop-shadow-2xl rounded-lg h-auto w-[350px] p-6">
          <div className="relative card-image flex flex-row justify-center items-center cursor-pointer">
            <img
              src="./assets/imgs/image-equilibrium.jpg"
              alt="token"
              className="rounded-lg"
            />
            <div className="bg-featured absolute h-full w-full top-0 bottom-0 left-0 right-0 rounded-lg opacity-50 overlay hidden"></div>
            <img
              src="./assets/imgs/icon-view.svg"
              alt="icon-view"
              className="icon-view hidden absolute"
            />
          </div>
          <div>
            <p className="text-white hover:text-featured text-2xl cursor-pointer font-normal pt-6">
              Equilibrium #3429
            </p>
            <p className="text-secondary-text font-light pt-4 text-lg tracking-wide">
              Our Equilibrium collection promotes balance and calm.
            </p>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center py-5">
              <img
                src="./assets/imgs/icon-ethereum.svg"
                alt="ethereum icon"
                className="w-auto h-5"
              />
              <p className="text-featured ml-2 text-base">0.041 ETH</p>
            </div>
            <div className="flex flex-row items-center py-5">
              <img
                src="./assets/imgs/icon-clock.svg"
                alt="clock icon"
                className="w-auto h-5"
              />
              <p className="text-secondary-text ml-2 text-base font-light">
                3 days left
              </p>
            </div>
          </div>

          <div className="border-line-dark border-t pt-5 flex flex-row items-center">
            <img
              src="./assets/imgs/image-avatar.png"
              alt="avatar"
              className="rounded-full w-8 h-8 border border-white mr-2"
            />
            <p className="text-secondary-text ml-2 text-base font-light">
              Creation of{" "}
              <span className="text-white hover:text-featured cursor-pointer">
                Jules Wyvern
              </span>
            </p>
          </div>
        </div>
      </div>

      <section className="text-white h-1/5 flex flex-col justify-end items-center">
        <p className="test-xs py-3">
          {" "}
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U"
            className="text-featured cursor-pointer"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://github.com/Ellinsa"
            className="text-featured cursor-pointer"
          >
            Victoria Akhmatova
          </a>
          .
        </p>
      </section>
    </main>
  );
}

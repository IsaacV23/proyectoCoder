import { Waveform } from "@uiball/loaders"

const LoaderComponent = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Waveform size={50} lineWeight={3.5} speed={1} color="blue" />
    </div>
  )
}

export default LoaderComponent
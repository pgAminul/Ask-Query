export default function Loading() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-base-100 text-center gap-6">
      <span className="loading loading-infinity loading-lg text-primary"></span>
      <p className="text-lg font-semibold text-primary">
        Please wait, we’re loading your experience...
      </p>
    </div>
  );
}

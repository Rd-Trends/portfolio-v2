export default function Loading() {
  return (
    <div className="flex h-[400px] w-full flex-col items-center justify-center">
      <div
        role="presentation"
        className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent"
      />
    </div>
  );
}

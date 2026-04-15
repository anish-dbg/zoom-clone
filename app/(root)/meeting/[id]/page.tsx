import { use } from "react";

export default function Meeting({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  return (
    <div>
      Meeting Room : #{id}
    </div>
  );
}
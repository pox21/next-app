"use client";
import { useParams } from "next/navigation";

export default function ExampleClientComponent() {
  const params = useParams();
  console.log(params);
  return <>{params.id}</>;
}

import ChatwootCorretoresWidget from "@/components/chatbot/ChatwootCorretoresWidget";

export default function CorretoresLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <ChatwootCorretoresWidget />
    </>
  );
}

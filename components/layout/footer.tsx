import { MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-4">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
        <div className="flex flex-col items-center gap-2 px-8 md:flex-row md:gap-2 md:px-0">
          <MessageCircle className="h-6 w-6" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built By Excel-D-Oracle
          </p>
        </div>
      </div>
    </footer>
  );
}
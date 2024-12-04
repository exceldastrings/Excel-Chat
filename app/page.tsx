import { Button } from '@/components/ui/button';
import { MessageCircle, Users, Shield, Share2 } from 'lucide-react';
import Link from 'next/link';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function Home() {
  const features = [
    {
      icon: MessageCircle,
      title: 'Real-time Chat',
      description: 'Instant messaging with real-time updates',
    },
    {
      icon: Users,
      title: 'Group Chats',
      description: 'Create and manage group conversations',
    },
    {
      icon: Shield,
      title: 'Secure',
      description: 'End-to-end encryption for your privacy',
    },
    {
      icon: Share2,
      title: 'File Sharing',
      description: 'Share files and media securely',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-6 md:py-10 lg:py-32">
          <div className="container mx-auto max-w-[64rem] flex flex-col items-center gap-4 text-center">
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
              Connect and collaborate with ease
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Secure messaging, group chats, and seamless file sharing. All in one place.
            </p>
            <div className="space-x-4">
              <Link href="/register">
                <Button size="lg">Get Started</Button>
              </Link>
              <Link href="/features">
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12 lg:py-24 bg-slate-50 dark:bg-transparent">
          <div className="container mx-auto max-w-[58rem] flex flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
              Features
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Everything you need to stay connected and productive
            </p>
          </div>
          <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="relative overflow-hidden rounded-lg border bg-background p-2">
                <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                  <feature.icon className="h-12 w-12" />
                  <div className="space-y-2">
                    <h3 className="font-bold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
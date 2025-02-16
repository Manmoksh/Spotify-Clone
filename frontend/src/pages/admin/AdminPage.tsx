import { useAuthStore } from "@/stores/useAuthStore";
import DashboardStats from "./components/DashboardStats";
import Header from "./components/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Album, Music } from "lucide-react";
import SongTabContent from "./components/SongTabContent";
import AlbumTabContent from "./components/AlbumTabContent";
import { useEffect } from "react";
import { useMusicStore } from "@/stores/useMusicStore";

const AdminPage = () => {
  const { isAdmin, isLoading } = useAuthStore();
  const { fetchAlbums, fetchSongs, fetchStats } = useMusicStore();
  if (!isAdmin && !isLoading) return <div>Unautherized</div>;
  useEffect(() => {
    fetchAlbums(), fetchSongs(), fetchStats();
  }, [fetchAlbums, fetchSongs, fetchStats]);
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900  via-zinc-900 to-black text-zinc-100 p-8">
      <Header />
      <DashboardStats />
      <Tabs defaultValue="songs" className="space-y-6">
        <TabsList className="bg-zinc-800/50 p-1 rounded-[0.5rem]">
          <TabsTrigger
            value="songs"
            className="data-[state-active]:bg-zinc-700 cursor-pointer rounded-[0.5rem]"
          >
            <Music className="size-4 mr-2" />
            Songs
          </TabsTrigger>
          <TabsTrigger
            value="albums"
            className="data-[state-active]:bg-zinc-700 cursor-pointer rounded-[0.5rem]"
          >
            <Album className="size-4 mr-2" />
            Albums
          </TabsTrigger>
        </TabsList>
        <TabsContent value="songs">
          <SongTabContent />
        </TabsContent>
        <TabsContent value="albums">
          <AlbumTabContent />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminPage;

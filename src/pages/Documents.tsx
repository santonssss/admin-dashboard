import { Layout } from "@components/dashboard";
import BlurContainer from "@components/ui/blur-container";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@components/ui/table";
import {
  Plus,
  FileText,
  Image,
  File,
  MoreHorizontal,
  Star,
  Search,
} from "lucide-react";

const Documents = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Documents</h1>
          <Button className="gap-1">
            <Plus size={16} />
            New Document
          </Button>
        </div>

        <div className="relative w-full max-w-md mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input placeholder="Search documents..." className="pl-10" />
        </div>

        <BlurContainer>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12"></TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Modified</TableHead>
                <TableHead className="w-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="cursor-pointer">
                  <Star
                    size={16}
                    className="text-muted-foreground hover:text-yellow-400"
                  />
                </TableCell>
                <TableCell className="font-medium">
                  Q3 Performance Report
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <FileText size={16} className="text-blue-500" />
                    <span>Document</span>
                  </div>
                </TableCell>
                <TableCell>1.2 MB</TableCell>
                <TableCell>2 days ago</TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal size={16} />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="cursor-pointer">
                  <Star
                    size={16}
                    className="text-muted-foreground hover:text-yellow-400"
                  />
                </TableCell>
                <TableCell className="font-medium">Marketing Assets</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Image size={16} className="text-purple-500" />
                    <span>Image</span>
                  </div>
                </TableCell>
                <TableCell>4.7 MB</TableCell>
                <TableCell>1 week ago</TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal size={16} />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="cursor-pointer">
                  <Star size={16} className="text-yellow-400" />
                </TableCell>
                <TableCell className="font-medium">Project Proposal</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <FileText size={16} className="text-blue-500" />
                    <span>Document</span>
                  </div>
                </TableCell>
                <TableCell>824 KB</TableCell>
                <TableCell>2 weeks ago</TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal size={16} />
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="cursor-pointer">
                  <Star
                    size={16}
                    className="text-muted-foreground hover:text-yellow-400"
                  />
                </TableCell>
                <TableCell className="font-medium">Budget Template</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <File size={16} className="text-green-500" />
                    <span>Spreadsheet</span>
                  </div>
                </TableCell>
                <TableCell>1.5 MB</TableCell>
                <TableCell>1 month ago</TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal size={16} />
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </BlurContainer>
      </div>
    </Layout>
  );
};

export default Documents;

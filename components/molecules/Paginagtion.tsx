import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    pageSize: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
                                                   currentPage,
                                                   totalPages,
                                                   totalItems,
                                                   pageSize,
                                                   onPageChange,
                                               }) => {
    const startItem = (currentPage - 1) * pageSize + 1;
    const endItem = Math.min(currentPage * pageSize, totalItems);

    const renderPageNumbers = () => {
        const pages = [];

        // Simple logic to show first, last, current, and surrounding pages
        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage > 2) pages.push(1);
            if (currentPage > 3) pages.push(-1); // ellipsis

            if (currentPage > 1) pages.push(currentPage - 1);
            pages.push(currentPage);
            if (currentPage < totalPages) pages.push(currentPage + 1);

            if (currentPage < totalPages - 2) pages.push(-1); // ellipsis
            if (currentPage < totalPages - 1) pages.push(totalPages);
        }

        return pages.map((page, idx) =>
            page === -1 ? (
                <span key={idx}>...</span>
            ) : (
                <button
                    key={idx}
                    onClick={() => onPageChange(page)}
                    className={`px-3 py-1 rounded-md ${
                        page === currentPage
                            ? "bg-gray-200 text-black"
                            : "hover:bg-gray-100 text-gray-600"
                    }`}
                >
                    {page}
                </button>
            )
        );
    };

    return (
        <div className="flex justify-between items-center text-sm text-gray-600 mt-4">
            <p>
                Showing <b>{startItem}</b> to <b>{endItem}</b> of <b>{totalItems}</b>{" "}
                products
            </p>
            <div className="flex items-center space-x-2">
                <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                >
                    <ChevronLeft className="w-4 h-4" />
                </Button>
                {renderPageNumbers()}
                <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                >
                    <ChevronRight className="w-4 h-4" />
                </Button>
            </div>
        </div>
    );
};

export default Pagination;

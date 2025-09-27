-- CreateTable
CREATE TABLE "public"."MovieData" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "duration" INTEGER NOT NULL,
    "image_url" TEXT NOT NULL,
    "discover" BOOLEAN NOT NULL,
    "trending" BOOLEAN NOT NULL,
    "director" TEXT NOT NULL,
    "cast" TEXT[],
    "language" TEXT NOT NULL,
    "synopsis" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "myListId" TEXT,

    CONSTRAINT "MovieData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."UserData" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "public"."MyList" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userDataId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "MovieData_id_key" ON "public"."MovieData"("id");

-- CreateIndex
CREATE UNIQUE INDEX "UserData_id_key" ON "public"."UserData"("id");

-- CreateIndex
CREATE UNIQUE INDEX "MyList_id_key" ON "public"."MyList"("id");

-- AddForeignKey
ALTER TABLE "public"."MovieData" ADD CONSTRAINT "MovieData_myListId_fkey" FOREIGN KEY ("myListId") REFERENCES "public"."MyList"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."MyList" ADD CONSTRAINT "MyList_userDataId_fkey" FOREIGN KEY ("userDataId") REFERENCES "public"."UserData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

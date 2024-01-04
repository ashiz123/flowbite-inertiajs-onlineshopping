<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('variants', function (Blueprint $table) {
            $table->id();
            
            $table->unsignedBigInteger('product_id')->default(0);
            $table->foreign('product_id')->references('id')->on('products')->onDelete('cascade');

            $table->string('sku');
            $table->string('title')->nullable();
            $table->string('size')->nullable();
            $table->string('color')->nullable();
            $table->string('type')->nullable();
            $table->string('origin')->nullable();

            $table->float('quantity');
            $table->integer('price');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('variants');
    }
};
